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
  error: boolean;
};

function Cards({ data, loader, error }: Props) {
  const { StoreLoader } = useAppSelector((state) => state.loaderReducer);
  const { changeState } = openedSlice.actions;
  const dispatch = useAppDispatch();

  if (loader || StoreLoader) return <p>Loading...</p>;
  if (error) return <p>Not Results</p>;

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
