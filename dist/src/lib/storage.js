"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadBase64Image = uploadBase64Image;
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseServiceRoleKey);
async function uploadBase64Image(base64Data, zoneName) {
    const matches = base64Data.match(/^data:(.+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
        throw new Error('Invalid base64 image data string.');
    }
    const contentType = matches[1];
    const buffer = Buffer.from(matches[2], 'base64');
    const fileExtension = contentType.split('/')[1] || 'png';
    const fileName = `design_${Date.now()}_${zoneName}_${Math.random().toString(36).substring(7)}.${fileExtension}`;
    const filePath = `uploads/${fileName}`;
    const { error } = await supabase.storage
        .from('shirt-designs')
        .upload(filePath, buffer, {
        contentType,
        upsert: true,
    });
    if (error) {
        throw new Error(`Supabase upload failed: ${error.message}`);
    }
    const { data } = supabase.storage.from('shirt-designs').getPublicUrl(filePath);
    return data.publicUrl;
}
//# sourceMappingURL=storage.js.map