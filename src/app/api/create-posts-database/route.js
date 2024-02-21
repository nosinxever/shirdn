// app/api/create-posts-database/route.js
import { Client } from "@notionhq/client";
import { createPostDatabase, getDatabasesFromPage} from "@/lib/notionServer";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const dynamic = 'force-dynamic' 


export async function POST(request) {
    const { parentId } = await request.json();

    try {
        const response = await createPostDatabase(parentId)

        return new Response(JSON.stringify({ message: 'Database created successfully', databaseId: response.id }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error creating database', error }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}



//http://localhost:3000/api/create-posts-database?query=77774fc85384416695cae74a3e20018c
export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const pageId = searchParams.get('query')
    
    try {
        const response = await getDatabasesFromPage(pageId)
        return new Response(JSON.stringify(response), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error retrieving databases', error }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
