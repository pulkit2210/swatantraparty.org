import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  if (featured) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full w-fit mb-4">
              {post.category}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{post.author}</span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
          {post.category}
        </span>
        <h3 className="font-display text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
