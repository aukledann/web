import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./search_results_list.css"
import { SearchResult } from './search_result';

export const SearchResultsList = ({results})=> {
    
    return (
        <div className='results-list'>
            {
            results.map((result,id)=>{
                return<SearchResult result={result} key={id} />
            })
            }
        
        </div>
    );
    
}
