import { prop, getModelForClass, DocumentType, ReturnModelType } from '@typegoose/typegoose';

class Tool {
    @prop({ required: true })
    public title!: string;

    @prop()
    public link?: string;

    @prop()
    public description?: string;

    @prop({ required: true })
    public tags!: Array<string>;

    // Example of static method
    public static findByTitle(this: ReturnModelType<typeof Tool>, title: string) {
        return this.find({ title }).exec();
    }

    // Example of instance method
    public async mixTitleAndTag(this: DocumentType<Tool>) {
        return `${this.title}-${this.tags[0]}`
    }
}

const ToolModel = getModelForClass(Tool);

export default ToolModel;
