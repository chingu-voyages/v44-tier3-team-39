import fs from 'fs';
import path from 'path';

const tagsFilePath = path.resolve(new URL('./tags.json', import.meta.url).pathname);
const tagsData = fs.readFileSync(tagsFilePath);
const existingTags = JSON.parse(tagsData);
const BANNEDTAGS = ['bad words', 'more bad words', 'worst bad words'];

const tagsWare = async (req, res, next) => {
  const { tags } = req.body;
  let suggestedTags = [];
  let newTags = [];

  if (tags && Array.isArray(tags)) {
    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];

      if (existingTags.includes(tag)) {
        suggestedTags.push(tag);
      }

      if (!existingTags.includes(tag) && !newTags.includes(tag)) {
        newTags.push(tag);
      }

      for (let j = 0; j < BANNEDTAGS.length; j++) {
        const banned = BANNEDTAGS[j];

        if (tag.includes(banned)) {
          // Handle the error or validation message appropriately
          return res.status(400).json({ message: `${banned} cannot be used as a tag; violates tag rules and policy.` });
        }
      }
    }
  }

  // Update the existingTags array with newTags
  existingTags.push(...newTags);

  next();
};

export default tagsWare;
