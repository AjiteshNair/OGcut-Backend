"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
let StorageService = class StorageService {
    supabase;
    constructor() {
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!supabaseUrl || !supabaseKey) {
            throw new Error('SUPABASE_URL and SUPABASE_KEY must be defined in .env');
        }
        this.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
    }
    async uploadBase64Image(base64Data, bucket, path) {
        console.log(`[StorageService] Starting upload to bucket "${bucket}" at path "${path}"`);
        const matches = base64Data.match(/^data:(.+);base64,(.+)$/);
        const buffer = matches ? Buffer.from(matches[2], 'base64') : Buffer.from(base64Data, 'base64');
        const contentType = matches ? matches[1] : 'image/png';
        const { data, error } = await this.supabase.storage
            .from(bucket)
            .upload(path, buffer, {
            contentType,
            upsert: true,
        });
        if (error) {
            console.error('[StorageService] Supabase Upload Error Details:', error);
            throw new common_1.BadRequestException(`Supabase Upload Error: ${error.message}`);
        }
        console.log('[StorageService] Upload success, response data:', data);
        const { data: publicUrlData } = this.supabase.storage
            .from(bucket)
            .getPublicUrl(data.path);
        console.log('[StorageService] Generated Public URL:', publicUrlData.publicUrl);
        return publicUrlData.publicUrl;
    }
};
exports.StorageService = StorageService;
exports.StorageService = StorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StorageService);
//# sourceMappingURL=storage.service.js.map