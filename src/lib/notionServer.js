import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function createPostDatabase(parentId) {
  try {
    // Check if the parent page exists
    await notion.pages.retrieve({ page_id: parentId });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Parent page not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const properties = {
    Title: { title: {} }, // Title is a required property
    Summary: { rich_text: {} },
    Category: {
      select: {
        options: [
          { name: "News", color: "blue" },
          { name: "Opinion", color: "green" },
          { name: "Money", color: "yellow" },
          { name: "Analysis", color: "red" },
        ],
      },
    },
    Status: {
      select: {
        options: [
          { name: "Published", color: "green" },
          { name: "Invisible", color: "gray" }, // Changed from "grey" to "gray"
          { name: "Draft", color: "orange" },
        ],
      },
    },
    Tags: {
      multi_select: {
        options: [
          { name: "Stock", color: "purple" },
          { name: "Crypto", color: "blue" },
          { name: "News", color: "red" },
        ],
      },
    },
    Slug: {
      formula: {
        expression: 'replaceAll((prop("Title") + "-") + id(), " ", "-")',
      },
    },
    Password: { rich_text: {} },
    "Created Time": { created_time: {} },
    "Last Edited Time": { last_edited_time: {} },
  };

  // Define properties for the new database

  const title = [{ type: "text", text: { content: "PostsDB" } }];
  const icon = { type: "emoji", emoji: "🎉" };
  const parent = { type: "page_id", page_id: parentId };

  try {
    const response = await notion.databases.create({
      parent: parent,
      title: title,
      properties: properties,
      icon: icon,
    });
    return response;

  } catch (error) {
    console.error(error);
    throw new Error("Failed to Create Database to Notion");
  }
}


export async function createWishsDatabase(parentId) {
  try {
    // Check if the parent page exists
    await notion.pages.retrieve({ page_id: parentId });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Parent page not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const properties = {
    Title: { title: {} }, // Title is a required property
    Description: { rich_text: {} },
    Status: {
      select: {
        options: [
          { name: "Todo", color: "orange" },
          { name: "Discard", color: "gray" }, 
          { name: "Done", color: "green" },
        ],
      },
    },
    Color: {
      select: {
        options: [
          { name: "orange", color: "orange" },
          { name: "gray", color: "gray" }, 
          { name: "green", color: "green" },
        ],
      },
    },
    Tags: {
      multi_select: {
        options: [],
      },
    },
    Slug: {
      formula: {
        expression: 'replaceAll((prop("Title") + "-") + id(), " ", "-")',
      },
    },
    "Created Time": { created_time: {} },
    "Last Edited Time": { last_edited_time: {} },
  };

  // Define properties for the new database

  const title = [{ type: "text", text: { content: "WishsDB" } }];
  const icon = { type: "emoji", emoji: "🎉" };
  const parent = { type: "page_id", page_id: parentId };

  try {
    const response = await notion.databases.create({
      parent: parent,
      title: title,
      properties: properties,
      icon: icon,
    });
    return response;

  } catch (error) {
    console.error(error);
    throw new Error("Failed to Create Database to Notion");
  }
}

export async function createMoodDatabase(parentId) {
  try {
    // Check if the parent page exists
    await notion.pages.retrieve({ page_id: parentId });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Parent page not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const properties = {
    Title: { title: {} }, // Title is a required property
    Comment: { rich_text: {} },
    Like: { checkbox: {} },
    Tags: {
      multi_select: {
        options: [],
      },
    },
    Slug: {
      formula: {
        expression: 'replaceAll((prop("Title") + "-") + id(), " ", "-")',
      },
    },
    "Created Time": { created_time: {} },
    "Last Edited Time": { last_edited_time: {} },
  };

  // Define properties for the new database

  const title = [{ type: "text", text: { content: "MoodDB" } }];
  const icon = { type: "emoji", emoji: "🎉" };
  const parent = { type: "page_id", page_id: parentId };

  try {
    const response = await notion.databases.create({
      parent: parent,
      title: title,
      properties: properties,
      icon: icon,
    });
    return response;

  } catch (error) {
    console.error(error);
    throw new Error("Failed to Create Database to Notion");
  }
}





export async function getAllPosts(databaseId) {
  try {
    // Query the Notion database
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [
          { property: "Status", select: { equals: "Published" } },
          { property: "Status", select: { equals: "Invisible" } },
        ],
      },
      sorts: [{ property: "Last Edited Time", direction: "descending" }],
    });

    // Check the response structure
    if (!response || !response.results) {
      throw new Error("Invalid response structure from Notion API");
    }

    // Extract and format the entries data
    return response.results.map((entry) => ({
      id: entry.id,
      title: entry.properties.Title.title[0]?.text.content,
      summary: entry.properties.Summary.rich_text[0]?.text.content,
      category: entry.properties.Category.select?.name,
      status: entry.properties.Status.select?.name,
      tags: entry.properties.Tags.multi_select.map((tag) => tag.name),
      slug: entry.properties.Slug.formula.string,
      password: entry.properties.Password.rich_text[0]?.text.content,
      createdTime: entry.properties["Created Time"].created_time,
      lastEditedTime: entry.properties["Last Edited Time"].last_edited_time,
    }));
  } catch (error) {
    console.error("Error in getEntriesData:", error);
    throw error;
  }
}



export async function getAllWishs(databaseId) {
  try {
    // Query the Notion database
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [{ property: "Created Time", direction: "descending" }],
    });

    // Check the response structure
    if (!response || !response.results) {
      throw new Error("Invalid response structure from Notion API");
    }

    // Extract and format the entries data
    return response.results.map((entry) => ({
      id: entry.id,
      title: entry.properties.Title.title[0]?.text.content,
      description: entry.properties.Description.rich_text[0]?.text.content,
      status: entry.properties.Status.select?.name,
      color: entry.properties.Color.select?.name,
      tags: entry.properties.Tags.multi_select.map((tag) => tag.name),
      slug: entry.properties.Slug.formula.string,
      createdTime: entry.properties["Created Time"].created_time,
      lastEditedTime: entry.properties["Last Edited Time"].last_edited_time,
    }));
  } catch (error) {
    console.error("Error in getEntriesData:", error);
    throw error;
  }
}



export async function getAllMood(databaseId) {
  try {
    // Query the Notion database
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [{ property: "Created Time", direction: "descending" }],
    });

    // Check the response structure
    if (!response || !response.results) {
      throw new Error("Invalid response structure from Notion API");
    }

    // Extract and format the entries data
    return response.results.map((entry) => ({
      id: entry.id,
      title: entry.properties.Title.title[0]?.text.content,
      comment: entry.properties.Description.rich_text[0]?.text.content,

      tags: entry.properties.Tags.multi_select.map((tag) => tag.name),
      slug: entry.properties.Slug.formula.string,
      createdTime: entry.properties["Created Time"].created_time,
      lastEditedTime: entry.properties["Last Edited Time"].last_edited_time,
    }));
  } catch (error) {
    console.error("Error in getEntriesData:", error);
    throw error;
  }
}



export async function getPostsByTag(databaseId,tag) {
  try {
    // Query the Notion database
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Tags",
        multi_select: { contains: tag } // Updated filter to use 'contains' for multi_select properties
      },
      sorts: [{ property: "Last Edited Time", direction: "descending" }],
    });

    // Check the response structure
    if (!response || !response.results) {
      throw new Error("Invalid response structure from Notion API");
    }

    // Extract and format the entries data
    return response.results.map((entry) => ({
      id: entry.id,
      title: entry.properties.Title.title[0]?.text.content,
      summary: entry.properties.Summary.rich_text[0]?.text.content,
      category: entry.properties.Category.select?.name,
      status: entry.properties.Status.select?.name,
      tags: entry.properties.Tags.multi_select.map((tag) => tag.name),
      slug: entry.properties.Slug.formula.string,
      password: entry.properties.Password.rich_text[0]?.text.content,
      createdTime: entry.properties["Created Time"].created_time,
      lastEditedTime: entry.properties["Last Edited Time"].last_edited_time,
    }));
  } catch (error) {
    console.error("Error in getEntriesData:", error);
    throw error;
  }
}


export async function getPostBySlug(databaseId, slug) {
  try {
    const posts = await getAllPosts(databaseId);

    for (let post of posts) {
      if (post.slug === slug) {
        
        post.cover = await getPageCover(post.id);
        post.content = await getPageContent(post.id);
        return post;
      } 
    }
  } catch (error) {
    console.error("Error fetching entries from Notion:", error);
    throw new Error("Failed to fetch entries from Notion.");
  }
}




async function getPageCover(pageId) {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId });

    if (response.cover) {
      if (response.cover.type === "external") {
        return response.cover.external.url;
      } else if (response.cover.type === "file") {
        return response.cover.file.url;
      }
    } else {
      return "";
    }
  } catch (error) {
    console.error(error.body);
    return "";
  }
}

async function getPageContent(pageId) {
  // Fetching the blocks from the Notion page
  const response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50, // Adjust the page size as needed
  });

  const blocks = response.results;
  //   console.log(blocks);
  const contentList = [];

  for (const block of blocks) {
    let content = {};

    switch (block.type) {
      case "paragraph":
      case "heading_1":
      case "heading_2":
      case "heading_3":
      case "numbered_list_item":
      case "bulleted_list_item":
      case "quote":
        let textContent = "";
        block[block.type].rich_text.forEach(
          (text) => (textContent += text.plain_text)
        );
        content = { type: block.type, content: textContent };
        break;
      case "divider":
        content = { type: "divider", content: "---" };
        break;
      case "image":
        const imageUrl =
          block.image.type === "file"
            ? block.image.file.url
            : block.image.external.url;
        content = { type: "image", content: imageUrl };
        break;
      default:
        console.log(`Unhandled block type: ${block.type}`);
        continue;
    }
    if (content.content) {
      contentList.push(content);
    }
  }
  return contentList;
}

export async function addPost(
  title,
  summary,
  category,
  status,
  tags,
  content,
  dbId,
) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: dbId },
      properties: {
        Title: { title: [{ text: { content: title } }] },
        Summary: { rich_text: [{ text: { content: summary } }] },
        Category: { select: { name: category } },
        Status: { select: { name: status } },
        Tags: { multi_select: tags.map((tag) => ({ name: tag.trim() })) },
      },
    //   cover: {
    //     type: 'external ',
    //     external : {
    //         url: imageUrl,
    //     },
    // },
      children: [
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [{ type: "text", text: { content: content } }],
          },
        },
      ],
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add post to Notion");
  }
}


export async function addWish(
  title,
  description,
  status,
  tags,
  color,
  dbId,
) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: dbId },
      properties: {
        Title: { title: [{ text: { content: title } }] },
        Description: { rich_text: [{ text: { content: description } }] },
        Status: { select: { name: status } },
        Color: { select: { name: color } },
        Tags: { multi_select: tags.map((tag) => ({ name: tag.trim() })) },
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add post to Notion");
  }
}


export async function addMood(
  title,
  dbId,
) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: dbId },
      properties: {
        Title: { title: [{ text: { content: title } }] },
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add post to Notion");
  }
}


export async function getDatabasesFromPage(pageId) {
  const response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50, // Adjust as needed
  });

  const databases = response.results.filter(block => block.type === 'child_database');
  return databases;
}



