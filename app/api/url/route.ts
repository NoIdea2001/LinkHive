import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import Url,{IUrl} from "@/model/urlModel";
import dbConnect from "@/lib/dbConnect";



interface ApiResponse {
  success: boolean;
  message: string;
  data?: IUrl;
  error?: string;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    await dbConnect(); 
    
    const body = await request.json();
    const { url } = body;
    if (!url) {
      return NextResponse.json(
        {
          success: false,
          message: "URL is required",
          error: "URL is required",
        },
        { status: 400 }
      );
    }
    const path = nanoid(5);
    const link : IUrl = {
      originalUrl: url,
      urlCode: path,
      clickDetails: [], // Initialize clickDetails as an empty array
      // Add other required properties with default values
    };
    const newLink = new Url(link);
    newLink.save();
    return NextResponse.json(
        {
          success: true,
          message: "success",
          data: link,
        },
        { status: 201 }
      );
  } catch (error) {
    const err = error as Error;
    console.log(err);
    
    return NextResponse.json(
      {
        success: false,
        message: "Database conn failed",
        error: `contact helpdesk: ${err?.message || err}`,
      },
      { status: 400 }
    );
  }
  
}
