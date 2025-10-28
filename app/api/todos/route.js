import { dbConnect } from "@/lib/dbConnect";
import { Todo } from "@/lib/models/todos";
import { NextResponse } from "next/server";

dbConnect()
export async function GET() {
    try {
         const todos= await Todo.find()
         return NextResponse.json({message:"Data GET Successfully",todos},{status:200})
    
    } catch (err) {
        return NextResponse.json({message:"Data GET Failed", error: err.message},{status:500})
    }
}

// export async function POST(req) {
//   const data = await req.json();
//   const todo = await Todo.create(data);
//   return NextResponse.json(todo, { status: 201 });
// }

// export async function PUT(req, { params }) {

//   const data = await req.json();
//   const updated = await Todo.findByIdAndUpdate(params.id, data, { new: true });
//   return NextResponse.json(updated);
// }

// export async function DELETE(_, { params }) {

//   await Todo.findByIdAndDelete(params.id);
//   return NextResponse.json({ message: "Deleted successfully" });
// }