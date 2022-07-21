import {useState} from "react";

export const Search = ({onSubmit}) => {
    const [term, setTerm] = useState('')

    const onFormSubmit = e => {
        e.preventDefault();
        onSubmit(term);
        setTerm('');
    };

    const onInputChange = e => {
        setTerm(e.target.value);
    };

    return (
        <div>
            <form className="form-inline" onSubmit={onFormSubmit}>
                <div className="w-100 d-flex justify-content-center align-items-center my-4">
                    <input
                        className="form-control w-50"
                        type="text"
                        value={term}
                        placeholder="Search movies"
                        onChange={onInputChange}
                    />
                    <button type="submit" className="btn btn-primary mx-2 my-0">
                        Submit
                    </button>
                </div>
            </form>
        </div>

    );
}
