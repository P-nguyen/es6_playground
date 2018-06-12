import $ from 'jquery';

export function addHeader( text ){
    $('#root').append(`<h1>${text}</h1>`);
}

export function addParagraph( text ){
    $('#root').append(`<p>${text}</p>`);
}

