import { useAppSelector } from '../store/redux';

export default function Forms() {
  const forms = useAppSelector((state) => state.formReducer);

  return (
    <ul>
      {[...forms].reverse().map((form) => {
        return (
          <li key={form.name}>
            <div>
              <img
                src={form.image.base64}
                alt="photo"
                width={100}
                height={100}
              />
            </div>
            <p>Name: {form.name}</p>
            <p>Age: {form.age}</p>
            <p>Gender: {form.gender}</p>
            <p>Country: {form.country}</p>
            <p>Email: {form.email}</p>
            <p>Password: {form.password}</p>
            <p>Consent: {form.agreement ? 'true' : 'false'}</p>
          </li>
        );
      })}
    </ul>
  );
}
