import { Link } from 'react-router-dom';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import Section from '../Components/Section';

export default function Footer() {
    return (
        <Section className={'bg-base-200'}>
            <div className="flex justify-between py-10 mobile-lg:flex-col mobile-lg:justify-center mobile-lg:gap-10">
                <div className="flex flex-col basis-1/3 items-center gap-2 order-1 mobile-lg:order-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 mobile-lg:justify-center">
                            <Phone className="text-lg" />
                            <span>+1 (902) 813-5153</span>
                        </div>
                        <div className="flex items-center gap-2 mobile-lg:justify-center">
                            <Email className="text-lg" />
                            <span>info@latitudeoverseas.com</span>
                        </div>
                        <div className="flex items-center gap-2 mobile-lg:justify-center mobile-lg:text-center mobile-lg:px-4">
                            <LocationOn className="text-lg" />
                            <span>456 Vodden St E, Brampton, ON L6S 5Y7, Canada</span>
                        </div>
                    </div>
                </div>
                <div className="basis-1/3 flex flex-col gap-4 items-center text-center mobile-lg:items-center order-2 mobile-lg:order-1">
                    <Link to={'/'}>
                        <img
                            className="h-16"
                            src="/logo.svg"
                            alt="Latitude Overseas Limited  Logo"
                        />
                    </Link>
                    <h5 className="w-4/5">Your trusted partner for seamless travel solutions</h5>
                </div>
                <div className="basis-1/3 flex flex-col gap-4 text-right items-end mobile-lg:items-center order-3 mobile-lg:text-center">
                    <strong className="text-xl"> Get In Touch </strong>
                    <p>Questions or feedback? We&apos;re here to assist you.</p>
                </div>
            </div>
            <hr />
            <div className="text-center my-5">
                <p>@2024 Latitude Overseas Limited | All Rights Reserved.</p>
            </div>
        </Section>
    );
}
