import React from 'react';
import { createClient } from 'contentful';

const BlogContext = React.createContext();
const options = process.env.CONTENTFUL_PREVIEW === 'true' ? {
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
    host: 'preview.contentful.com'
} :
    {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
    };

const client = createClient(options);


export function BlogProvider(props) {
    const [blogs, setBlogs] = React.useState([]);
    const [assets, setAssets] = React.useState([]);
    const [authors, setAuthors] = React.useState([]);
    const [tags, setTags] = React.useState([]);
    const value = React.useMemo(() => ({ blogs, setBlogs, assets, setAssets, tags, authors }), [blogs, assets, authors, tags]);
    React.useEffect(() => {
        client.getEntries({
            content_type: 'blogPost',
        })
            .then((response) => {
                setBlogs(response.items);
                setAssets(response.includes.Asset);
                setAuthors(response.includes.Entry);
            })
            .catch(console.error);
    }, []);


    React.useEffect(() => {
        const newTags = [];
        blogs.forEach(blog => {
            if (blog.fields.tags && blog.fields.tags.length > 0) {
                blog.fields.tags.forEach(tag => {
                    if (!newTags.includes(tag)) {
                        newTags.push(tag);
                    }
                })
            }
        });
        setTags(newTags);
    }, [blogs]);
    return <BlogContext.Provider value={value} {...props} />
}

export function useBlogProvider() {
    const context = React.useContext(BlogContext);
    if (!context) {
        throw new Error('You can not use the useBlogProvider outside of a blog context');
    }

    const { blogs, setBlogs, assets, setAssets, tags, authors } = context;

    const getBlogs = React.useCallback(() => blogs, [blogs]);

    const updateBlogs = React.useCallback((...args) => setBlogs(...args), [setBlogs]);

    const getAssets = React.useCallback(() => assets, [assets]);

    const updateAssets = React.useCallback((...args) => setAssets(...args), [setAssets]);

    const getAssetFromId = React.useCallback((id) => {
        const asset = assets.find(a => a.sys.id === id);
        return asset ? asset.fields : false;
    }, [assets]);

    const getBlog = React.useCallback((slug) => {
        const blog = blogs.find(b => b.fields.slug === slug);
        return blog ? blog.fields : false;
    }, [blogs]);

    const getTags = React.useCallback(() => tags, [tags]);

    const getAuthor = React.useCallback((id) => authors.find(t => t.sys.id === id), [authors]);

    return {
        getBlogs,
        updateBlogs,
        getAssets,
        updateAssets,
        getAssetFromId,
        getBlog,
        getTags,
        getAuthor,
    }
}