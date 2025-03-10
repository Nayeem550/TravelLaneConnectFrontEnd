import { Helmet } from 'react-helmet-async';

export default function Metadata() {
    return (
        <Helmet>
            {/* <!-- Basic Metadata --> */}
            <title>Latitude Overseas Limited </title>
            <meta
                name="description"
                content="Explore Latitude Overseas Limited  – your trusted partner for hassle-free travel and visa solutions. We provide expert guidance for work, student, tourist, and visa renewals, ensuring a seamless journey."
            />

            {/* <!-- Open Graph Metadata (Used by Facebook, WhatsApp, LinkedIn, etc.) --> */}
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Latitude Overseas Limited  - Your Trusted Travel Partner"
            />
            <meta
                property="og:description"
                content="Plan your next adventure with Latitude Overseas Limited . Discover expert visa assistance and travel services tailored for your needs."
            />
            <meta property="og:image" content="https://latitudeoverseas.com/logo.svg" />
            <meta
                property="og:image:alt"
                content="Latitude Overseas Limited  - Your Trusted Travel Partner"
            />
            <meta property="og:url" content="https://latitudeoverseas.com/" />
            <meta property="og:locale" content="en_US" />

            {/* <!-- Twitter Card Metadata --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:title"
                content="Latitude Overseas Limited  - Your Trusted Travel Partner"
            />
            <meta
                name="twitter:description"
                content="Explore seamless visa solutions and travel services with Latitude Overseas Limited . Let us simplify your journey."
            />
            <meta name="twitter:image" content="/logo.svg" />
            <meta
                name="twitter:image:alt"
                content="Latitude Overseas Limited  - Your Trusted Travel Partner"
            />

            {/* <!-- Additional Metadata (For better search engine optimization) --> */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Latitude Overseas Limited " />
            <meta
                name="keywords"
                content="Travel, Visa Solutions, Work Visa, Student Visa, Tourist Visa, Travel Services"
            />
        </Helmet>
    );
}
