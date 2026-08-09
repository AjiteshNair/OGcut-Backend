export declare class StorageService {
    private supabase;
    constructor();
    uploadBase64Image(base64Data: string, bucket: string, path: string): Promise<string>;
}
