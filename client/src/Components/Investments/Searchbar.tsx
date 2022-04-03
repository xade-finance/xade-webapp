
import { Registrar } from '@deusfinance/synchronizer-sdk';
import React from 'react'
import list from './functions'

type State = {

  query: string;
}

type Props = { 
    list: Array<object>;
}



var newList = [];
class SearchBar extends React.Component<Props, State> {
constructor(props: Props) {
    super(props)
  }
    state = {
        query: ''
    };
    


    handleSubmit = (e: React.SyntheticEvent) => 
    {
        alert('An essay was submitted: ' + this.state.query);
        e.preventDefault();
        // newList = {list.filter((registrar: Registrar, index: number) => }

    }

    handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ query: e.currentTarget.value });
    };

    render() 
    {
    return <div className = 'search-bar-center'>
        <form className = 'search-bar' onSubmit = {this.handleSubmit} >
          <input type="text" value = {this.state.query} onChange = {this.handleChange} className = 'input-text-investments' placeholder='Search for Crypto, Stocks, Commodities, Forex' />
          <button type="submit" className = 'input-submit-investments' value = ""><img className = 'search-adjust-investments' src = {process.env.PUBLIC_URL + '/images/search.svg'}/></button>
          </form>
    </div>
    }
}

export default SearchBar
