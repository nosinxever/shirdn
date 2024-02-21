// App/api/posts/route.js
import { getAllWishs,addWish} from "@/lib/notionServer";
import { redirect } from 'next/navigation'

// export const dynamic = 'force-dynamic'

export async function GET(request) {
    const databaseId = process.env.NOTION_WISHS_DATABASE_ID;

    const searchParams = request.nextUrl.searchParams
    const slug = searchParams.get('query')

    if (slug !== null) {
        redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishs/${slug}`)
    }

    if (!databaseId) {
        return new Response(JSON.stringify({ message: "Server configuration error: NOTION_POSTS_DATABASE_ID is not set" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const wishs = await getAllWishs(databaseId);
        return new Response(JSON.stringify(wishs), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return new Response(JSON.stringify({ message: "Error fetching posts", error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }


}


//add wish
export async function POST(request) {
    // Parse the request body
    const { title, description, status, tags, color} = await request.json();
    // console.log(title, summary, category, tags, content,imageUrl)

    const dbId = process.env.NOTION_WISHS_DATABASE_ID;

    try {
        // Insert the post into Notion
        const response = await addWish(title, description, status, tags,color,dbId)

        // Check if the post was added successfully
        if (response && response.id) {
            return new Response(JSON.stringify({ message: 'success', postId: response.id }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } else {
            throw new Error('No Post Id returned from Notion');
        }
    } catch (error) {
        return new Response(JSON.stringify({ message: `Failed to add post: ${error.message}` }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

