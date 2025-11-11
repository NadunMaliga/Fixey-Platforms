import { Helmet } from 'react-helmet-async';

const SEO = ({ 
    title = 'Fixey Platforms - Social Technology AI Robotics Company & Software Solutions',
    description = 'Fixey Platforms builds innovative social technology platforms and provides comprehensive software development services. From AlgoChat to custom solutions, we connect people and transform businesses.',
    keywords = 'Fixey Platforms, social technology, software development, AlgoChat, BookFlex, custom software, web development, mobile apps, AI solutions, Sri Lanka software company',
    ogImage = 'https://i.postimg.cc/bv0m0NTv/Untitled-design-8-removebg-preview.png',
    url = 'https://fixeyplatforms.com',
    type = 'website',
    article = null
}) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Fixey Software Solutions (Pvt) Ltd" />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="rating" content="General" />
            <meta name="distribution" content="Global" />
            
            {/* AI Search Optimization */}
            <meta name="AI-search-optimized" content="true" />
            <meta name="search-engine-friendly" content="true" />
            <meta name="content-type" content="text/html; charset=utf-8" />
            
            {/* Geographic Tags */}
            <meta name="geo.region" content="LK" />
            <meta name="geo.placename" content="Kalutara, Sri Lanka" />
            <meta name="geo.position" content="6.5854;79.9607" />
            <meta name="ICBM" content="6.5854, 79.9607" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Fixey Platforms" />
            <meta property="og:locale" content="en_US" />
            
            {article && (
                <>
                    <meta property="article:published_time" content={article.publishedTime} />
                    <meta property="article:modified_time" content={article.modifiedTime} />
                    <meta property="article:author" content={article.author} />
                </>
            )}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content="@FDeveloper80673" />
            <meta name="twitter:creator" content="@FDeveloper80673" />

            {/* Additional SEO */}
            <link rel="canonical" href={url} />
            <meta name="theme-color" content="#2563eb" />
            
            {/* Mobile Optimization */}
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="Fixey Platforms" />
            
            {/* Verification Tags (Add your verification codes) */}
            {/* <meta name="google-site-verification" content="your-verification-code" /> */}
            {/* <meta name="msvalidate.01" content="your-bing-verification-code" /> */}
        </Helmet>
    );
};

export default SEO;
