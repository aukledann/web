import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./search_result.css"
import Link from 'next/link';

export const SearchResult = ({result})=> {
    
    return (
        <div>
            <Link href={`/${result.prod_id}`}>
                <div className="search-result">
                    {result.prod_name}
                </div>
            </Link>
        </div>
    );
    
}