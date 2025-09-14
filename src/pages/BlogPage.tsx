import React from 'react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How AI is Transforming Legal Document Analysis',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we understand and process legal documents, making legal services more accessible to everyone.',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'AI & Technology',
      author: 'LegiSafe Team'
    },
    {
      id: 2,
      title: 'Understanding Contract Risk Assessment',
      excerpt: 'Learn about the key risk factors in legal contracts and how automated analysis can help identify potential issues before they become problems.',
      date: 'December 10, 2024',
      readTime: '7 min read',
      category: 'Legal Insights',
      author: 'LegiSafe Team'
    },
    {
      id: 3,
      title: 'The Future of Legal Tech: Student Innovation',
      excerpt: 'How students are driving innovation in legal technology and creating solutions that bridge the gap between complex legal language and user understanding.',
      date: 'December 5, 2024',
      readTime: '4 min read',
      category: 'Innovation',
      author: 'LegiSafe Team'
    },
    {
      id: 4,
      title: 'Plain Language in Legal Documents: Why It Matters',
      excerpt: 'The importance of making legal documents accessible to non-lawyers and how AI can help translate complex legal jargon into understandable language.',
      date: 'November 28, 2024',
      readTime: '6 min read',
      category: 'Legal Education',
      author: 'LegiSafe Team'
    },
    {
      id: 5,
      title: 'Building Trust in AI-Powered Legal Tools',
      excerpt: 'Discussing transparency, accuracy, and ethical considerations in developing AI tools for legal document analysis.',
      date: 'November 20, 2024',
      readTime: '8 min read',
      category: 'Ethics & Trust',
      author: 'LegiSafe Team'
    },
    {
      id: 6,
      title: 'From BIT Jaipur to Legal Innovation',
      excerpt: 'Our journey as computer science students tackling real-world legal challenges through technology and innovation.',
      date: 'November 15, 2024',
      readTime: '3 min read',
      category: 'Our Story',
      author: 'LegiSafe Team'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Legal Insights', 'Innovation', 'Legal Education', 'Ethics & Trust', 'Our Story'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">LegiSafe Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights on legal technology, AI innovation, and making legal documents more accessible
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-blue-100 hover:text-blue-700 bg-white text-gray-600 border border-gray-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                Featured
              </span>
              <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {blogPosts[0].title}
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {blogPosts[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{blogPosts[0].readTime}</span>
                <span>•</span>
                <span>{blogPosts[0].author}</span>
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-50 rounded-xl p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights on legal technology, 
            AI innovations, and updates from the LegiSafe team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;