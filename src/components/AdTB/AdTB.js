import React from "react";
import {
Accordion,
AccordionHeader,
AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
mount: { scale: 1 },
unmount: { scale: 0.9 },
};

const AdTb = () => {
const [open, setOpen] = React.useState(0);

const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <><div>
            <div className="flex items-center">
                <hr className="flex-grow border-t border-gray-500" />
                <span className="px-3 text-gray-500">
                    Pourquoi Choisir Tunisie Booking ?
                </span>
                <hr className="flex-grow border-t border-gray-500" />
            </div>
            <div>
                <h1 className="text-center font-bold text-2xl antialiased  hidden1 mo">
                    Agence de voyage Tunisie Booking : le N° 1 D'Hôtel Tunisie
                </h1>
                <p style={{ marginLeft: '80px', marginRight: '80px' }}>
                    La Tunisie, avec ses plages de rêve, son mythique désert du Sahara, ses innombrables souks, ses sites archéologiques, ainsi que bien d’autres encore, a énormément à offrir aux vacanciers. De plus, grâce aux services de Tunisie Booking, organiser un voyage dans ce beau pays n’a jamais été aussi facile. On peut, en effet, y réserver ses séjours en toute sécurité et à un prix alléchant.
                </p>
            </div>
        </div><>
                <Accordion style={{marginLeft: '15px' , marginRight: '15px'}} open={open === 1} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(1)}>Pourquoi réserver vos vacances chez TunisieBooking ?</AccordionHeader>
                    <AccordionBody>
                    Avec la révolution internet, il est devenu très facile de faire la réservation de son voyage devant son écran d’ordinateur ou de son Smartphone. <br />                    Ainsi, on peut tout simplement voir les multiples offres en ligne sur la destination voulue et réserver un hôtel, ou Voyages à l'étranger ou quelques activités à faire une fois sur place.

                    </AccordionBody>
                </Accordion >
                <Accordion style={{marginLeft: '15px' , marginRight: '15px'}} open={open === 2} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                    Pourquoi choisir une agence de voyage ? 
                    </AccordionHeader>
                    <AccordionBody>
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion style={{marginLeft: '15px' , marginRight: '15px'}} open={open === 3} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        Pourquoi choisir notre agence de voyage TunisieBooking ?  
                    </AccordionHeader>
                    <AccordionBody>
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
            </></>
    );
};


export default AdTb;