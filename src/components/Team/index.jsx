import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

const team = [
  {
    key: '1',
    image: './team/philip-jennings.png',
    name: 'Philip Jennings',
    role: 'Chief Executive Officer',
  },
  {
    key: '2',
    image: './team/daniel-lee.png',
    name: 'Daniel Lee',
    role: 'CTO',
  },
  {
    key: '3',
    image: './team/fasakin-henry.png',
    name: 'Fasakin Henry',
    role: 'Developer',
  },
  {
    key: '4',
    image: './team/joseph-ciccone.png',
    name: 'Joseph Ciccone',
    role: 'Social Media Manager',
  },
  {
    key: '5',
    image:
      'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Abigail Iyanu',
    role: 'Product designer',
  },
];

function Team() {
  return (
    <>
      <section className='bg-[#F7E9D1] py-[80px] flex flex-col items-start justify-start gap-[60px] md:gap-[100px] overflow-hidden'>
        <div className='w-full max-w-[1360px] px-5 md:px-10 mx-auto'>
          <h1 className='flex flex-col font-bold text-[40px] leading-[100%] sm:text-[48px] md:text-[64px] lg:text-[80px] tracking-[-2%] text-[#101828]'>
            <span>Brains Behind</span>
            <span>Map of PI.</span>
          </h1>
        </div>
        <div>
          <Splide
            extensions={{ AutoScroll }}
            options={{
              type: 'loop',
              gap: '24px',
              perPage: 20,
              arrows: false,
              pagination: false,
              autoScroll: {
                pauseOnHover: false,
              },
            }}
          >
            {team.map((member) => {
              return (
                <SplideSlide key={member.key}>
                  <div className='flex flex-col gap-3'>
                    <img
                      className='h-auto w-full max-w-full max-h-full'
                      src={member.image}
                      alt={`${member.name} profile image`}
                    />
                    <div className='flex flex-col text-base tracking-[-2%]'>
                      <h6 className='text-[#101828] font-medium'>
                        {member.name}
                      </h6>
                      <p className='text-[#475467]'>{member.role}</p>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </section>
    </>
  );
}

export default Team;
