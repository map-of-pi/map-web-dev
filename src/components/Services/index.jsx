import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import {
  Sms,
  DocumentText,
  Scan,
  MessageQuestion,
  People,
} from 'iconsax-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: '1',
        icon: (
            <Icon
                icon='heroicons:shopping-cart'
                className='text-white'
                fontSize={24}
            />
        ),
        title: 'Secure Transactions',
        body: 'Experience safe and secure transactions using PI for all your purchases and sales.',
    },
    {
        id: '2',
        icon: <DocumentText className='text-white' />,
        title: 'Product Listings',
        body: 'Easily list your products with detailed descriptions and high-quality images.',
    },
    {
        id: '3',
        icon: <Scan className='text-white' />,
        title: 'Order Tracking',
        body: 'Track your orders in real-time from purchase to delivery.',
    },
    {
        id: '4',
        icon: <MessageQuestion className='text-white' />,
        title: 'Customer Support',
        body: '24/7 customer support to assist you with any issues or inquiries.',
    },
    {
        id: '5',
        icon: <People className='text-white' />,
        title: 'Community Engagement',
        body: 'Engage with other buyers and sellers through our community forums and events.',
    },
    {
        id: '6',
        icon: <Sms className='text-white' />,
        title: 'Notifications',
        body: 'Receive instant notifications for new messages, orders, and updates.',
    },
];

function ServiceItem(props) {
  const { service } = props;
  return (
    <li className='-tracking-[2%] flex flex-col gap-4 service-item'>
      {service.icon}
      <h6 className='text-white text-xl leading-6'>{service.title}</h6>
      <p className='text-[#DCDCDC] text-base leading-[19px] font-light'>
        {service.body}
      </p>
    </li>
  );
}

function Services() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (sectionRef.current) {
      const animation = gsap.timeline({});

      animation
        .from(sectionRef.current?.getElementsByTagName('h5'), { y: 100 })
        .from(sectionRef.current?.getElementsByClassName('service-item'), {
          y: 250,
          opacity: 0,
          stagger: 0.1,
          duration: 0.67,
          ease: 'power1.out',
        });

      ScrollTrigger.create({
        animation,
        trigger: sectionRef.current,
        start: '10% 90%',
        end: 'bottom 95%',
        scrub: 1,
        toggleActions: 'play none none none',
        once: true,
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className='bg-[#0E1118] py-20'>
      <div className='app-container space-y-[50px] md:space-y-[80px] lg:space-y-[100px]'>
        <h5 className='unlocking text-white font-medium text-5xl leading-[56px] md:text-6xl lg:text-[80px] lg:leading-[92px] max-w-[792px]'>
          Unlocking Potential, Together
        </h5>
        <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10'>
          {services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
