import { Injectable, BadRequestException } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class StorageService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('SUPABASE_URL and SUPABASE_KEY must be defined in .env');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  /**
   * Uploads a base64 image string to Supabase Storage
   */
  // src/storage/storage.service.ts

    async uploadBase64Image(base64Data: string, bucket: string, path: string): Promise<string> {
    console.log(`[StorageService] Starting upload to bucket "${bucket}" at path "${path}"`);

    // Extract base64 buffer
    const matches = base64Data.match(/^data:(.+);base64,(.+)$/);
    const buffer = matches ? Buffer.from(matches[2], 'base64') : Buffer.from(base64Data, 'base64');
    const contentType = matches ? matches[1] : 'image/png';

    // Perform upload
    const { data, error } = await this.supabase.storage
        .from(bucket)
        .upload(path, buffer, {
        contentType,
        upsert: true,
        });

    if (error) {
        console.error('[StorageService] Supabase Upload Error Details:', error);
        throw new BadRequestException(`Supabase Upload Error: ${error.message}`);
    }

    console.log('[StorageService] Upload success, response data:', data);

    const { data: publicUrlData } = this.supabase.storage
        .from(bucket)
        .getPublicUrl(data.path);

    console.log('[StorageService] Generated Public URL:', publicUrlData.publicUrl);
    return publicUrlData.publicUrl;
    }
}