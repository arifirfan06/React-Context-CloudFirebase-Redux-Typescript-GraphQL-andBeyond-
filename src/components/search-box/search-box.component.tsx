import './search-box.styles.css';
import { ChangeEventHandler, ChangeEvent } from 'react';

// const name: string = "44"
const func: (a: string, b: number, c: boolean) => boolean = (a,b,c) => {return true}
// void is undefined or no return statement
const func2 = (a: string, b: number, c: boolean): void => {}

interface ISearchBoxProps extends IChangeHandlerProps {
className: string,
placeholder?: string,
}

interface IChangeHandlerProps {
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

type SearchBoxProps = {
  className: string,
  placeholder?: string | null,
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

type CAAddress = {
  street: string,
  provinced: string,
}

type USAddress = {
  street: string,
  state: string,
}

type JPAddress = {
  street: string,
  region: string
}

type NAAdress = CAAddress | USAddress | JPAddress

// to make those 2 type above union here is the code
const Address: NAAdress = {
  street: "",
  region: ""
}

const SearchBox = ({ className, placeholder, onChangeHandler }: ISearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
