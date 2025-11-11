import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type = 'organization' }) => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Fixey Software Solutions (Pvt) Ltd",
        "alternateName": "Fixey Platforms",
        "url": "https://fixeyplatforms.com",
        "logo": "/favicondark.ico",
        "description": "Fixey Platforms - Social Technology AI Robotics Company & Software Solutions",
        "foundingDate": "2025",
        "foundingLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kalutara",
                "addressCountry": "LK"
            }
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "fixeydevelopers@gmail.com",
            "contactType": "Customer Service",
            "availableLanguage": ["English", "Sinhala"]
        },
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61579896593947",
            "https://www.instagram.com/fixey_platforms221/",
            "https://www.youtube.com/@Fixey-d2o",
            "https://x.com/FDeveloper80673",
            "https://www.threads.com/@fixeyplatforms"
        ],
        "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
        },
        "knowsAbout": [
            "Software Development",
            "Social Technology",
            "Mobile App Development",
            "Web Development",
            "AI Solutions",
            "E-Commerce Platforms",
            "Booking Systems",
            "Custom Software"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Fixey Platforms",
        "url": "https://fixeyplatforms.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://fixeyplatforms.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "AlgoChat",
        "applicationCategory": "SocialNetworkingApplication",
        "operatingSystem": "Web, iOS, Android",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free unlimited video chat platform connecting people globally with gender and country preferences"
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Fixey Software Solutions (Pvt) Ltd",
        "image": "/favicondark.ico",
        "@id": "https://fixeyplatforms.com",
        "url": "https://fixeyplatforms.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kalutara",
            "addressLocality": "Kalutara",
            "addressRegion": "Western Province",
            "addressCountry": "LK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.5854,
            "longitude": 79.9607
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "24/7",
            "closes": "24/7"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://fixeyplatforms.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://fixeyplatforms.com/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Platforms",
                "item": "https://fixeyplatforms.com/platforms"
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(softwareApplicationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
