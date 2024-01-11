import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const POST = async request => {
  const { userId, prompt, tag } = await request.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      tag,
    });

    await newPrompt.save();

    return new ResponseCache(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {}
};
