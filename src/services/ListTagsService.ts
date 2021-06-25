import { getCustomRepository } from "typeorm"
import { TagRepositories } from "../repositories/TagRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {

    const tagsRepositories = getCustomRepository(TagRepositories);

    const tags = await tagsRepositories.find();

    // tags = tags.map((tag) => ({
    //   ...tag, nameCustom: `#${tag.name.toLocaleLowerCase()}`
    // }));

    return classToPlain(tags);
  }
}

export { ListTagsService }