import Link from 'next/link';

export const FooterPrimary = () => {
  const addresses = [
    {
      city: 'Los Angeles',
      addressLine: '145 Oliveshka Street, Los Angeles, LA 90003',
      phone: '+44 987 065 901',
      email: 'info@Example.com',
    },

    {
      city: 'San Francisco',
      addressLine: '210 Pier Street, San Francisco, CA 94111',
      phone: '+44 987 065 902',
      email: 'info@Example.com',
    },

    {
      city: 'New York',
      addressLine: '711 Snow Street, New York, NY 10014',
      phone: '+44 987 065 903',
      email: 'info@Example.com',
    },
  ];

  const socialMedia = [
    {
      label: 'Facebook',
      title: 'Follow this website on Facebook',
      url: 'https://facebook.com',
    },

    {
      label: 'Instragam',
      title: 'Follow this website on Instagram',
      url: 'https://instagram.com',
    },

    {
      label: 'Dribble',
      title: 'Follow this website on Dribble',
      url: 'https://dribble.com',
    },

    {
      label: 'Pinterest',
      title: 'Follow this website on Pinterest',
      url: 'https://pinterest.com',
    },

    {
      label: 'Twitter',
      title: 'Follow this website on Twitter',
      url: 'https://twitter.com',
    },

    {
      label: 'Linkedin',
      title: 'Follow this website on Linkedin',
      url: 'https://linkedin.com',
    },

    {
      label: 'Behance',
      title: 'Follow this website on Behance',
      url: 'https://behance.com',
    },
  ];
  return (
    <>
      <section className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-x-3 gap-y-10">
        {addresses.map((address, index) => {
          const { city, addressLine, phone, email } = address;
          return (
            <div key={index} className="flex flex-col gap-3 lg:g-5">
              <h1 className="uppercase font-semibold ">{city}</h1>
              <p>{addressLine}</p>
              <p>
                <Link
                  href={`tel:${phone}`}
                  title="Give us a call!"
                  className="lg:hover:text-[var(--aquamarine)]"
                >
                  {phone}
                </Link>
              </p>
              <p>
                <Link
                  href={`mailto:${email}`}
                  title="Email us"
                  className="lg:hover:text-[var(--aquamarine)]"
                >
                  {email}
                </Link>
              </p>
            </div>
          );
        })}

        <div>
          <h1 className="uppercase font-semibold mb-3">Follow us</h1>

          <ul className="grid grid-cols-2 grid-rows-4 gap-x-3 lg:gap-x-10 gap-y-2">
            {socialMedia.map((social, index) => {
              const { label, title, url } = social;
              return (
                <>
                  <li key={index}>
                    <Link
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={title}
                      className="lg:hover:text-[var(--aquamarine)]"
                    >
                      {label}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
