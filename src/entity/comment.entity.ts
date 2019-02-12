import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    TreeParent,
    Tree,
    JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Article } from './article.entity';

export enum CommentStatus {
	Verifying = 1, // 审核中
	VerifySuccess = 2, // 审核通过
	VerifyFail = 3, // 审核未通过
}

export enum CommentContentType {
	Markdown = 1,
	HTML = 2,
}

@Entity({name: 'comments'})
@Tree('closure-table')
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('datetime', { name: 'created_at' })
    createdAt: Date;

    @Column('datetime', { name: 'updated_at' })
    updatedAt: Date;

    @Column('datetime', { name: 'deleted_at', nullable: true, default: null })
    deletedAt: Date;

    @Column('text', { nullable: true, default: null })
    content: string;

    @Column('text', { name: 'html_content', nullable: true, default: null })
    htmlContent: string;

    @Column('int')
    contentType: CommentContentType;

    @Column('int')
    status: CommentStatus;

    @Column('int', { name: 'user_id' })
    userID: number;

    @ManyToOne(type => User)
    user: User;

    @Column('int', { name: 'parent_id' })
    parentID: number;

    @TreeParent()
    parent: Comment;

    @Column('varchar', { name: 'source_name', length: 100 })
    sourceName: string;

    @Column('int', { name: 'source_id' })
    sourceID: number;

    @ManyToOne(type => Article, article => article.comments)
    @JoinColumn({name: 'source_id'})
    article: Article;
}