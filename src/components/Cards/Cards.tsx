import Person from './Person/Person';
import { IPerson } from '../../models/interface';
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
  data: IPerson[];
};

function Cards({ data }: Props) {
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoader(true));
    Router.events.on('routeChangeComplete', () => setLoader(false));
    Router.events.on('routeChangeError', () => setLoader(false));

    return () => {
      Router.events.off('routeChangeStart', () => setLoader(true));
      Router.events.off('routeChangeComplete', () => setLoader(false));
      Router.events.off('routeChangeError', () => setLoader(false));
    };
  }, []);

  const router = useRouter();
  if (loader) return <p>Loading...</p>;
  if (!data) return <p>Not Results</p>;

  return (
    <>
      <div className="show_container alert alert-dismissible alert-warning">
        {data.length ? (
          data.map((person) => {
            const arrayFromUrl = person.url.split('/').filter((el) => el != '');
            const id = arrayFromUrl[arrayFromUrl.length - 1];
            return (
              <>
                <Link href={`/${id}${router.asPath}`}>
                  <Person data={person} key={person.name} />
                </Link>
              </>
            );
          })
        ) : (
          <p key="not_found">Not found</p>
        )}
      </div>
      <div></div>
    </>
  );
}

export default Cards;
