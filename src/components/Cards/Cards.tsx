import './styled.css';
import Person from './Person/Person';
import { Link, Outlet } from 'react-router-dom';
/* import { useContext } from 'react';
import { PeopleContext } from '../../Context/peopleContext'; */
import { IPerson } from '../../models/interface';
import { openedSlice } from '../../store/reducers/detailsSlice';
import { useAppDispatch, useAppSelector } from '../../hook/redux';

type Props = {
  data: IPerson[];
  loader: boolean;
  limit: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Cards({ data, loader, limit }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { opened } = useAppSelector((state) => state.detailsReducer);
  const { changeState } = openedSlice.actions;
  const dispatch = useAppDispatch();
  // const peopleData = useContext(PeopleContext);
  /* if (data.length) {
    data.length = limit;
  } */

  if (loader) return <p>Loading...</p>;

  return (
    <>
      <div className="show_container alert alert-dismissible alert-warning">
        {data.length ? (
          data.map((person) => {
            const arrayFromUrl = person.url.split('/').filter((el) => el != '');
            const id = arrayFromUrl[arrayFromUrl.length - 1];
            return (
              <Link
                onClick={() => dispatch(changeState(true))}
                to={id + location.search}
                key={id}
              >
                <Person data={person} key={person.name} />
              </Link>
            );
          })
        ) : (
          <p key="not_found">Not found</p>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Cards;
