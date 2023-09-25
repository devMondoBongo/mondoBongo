import { createClient } from '@/prismicio';
import { redirectToPreviewURL } from '@prismicio/next';

export async function GET(request) {
    const client = createClient();

    await redirectToPreviewURL({ client, request });
}
