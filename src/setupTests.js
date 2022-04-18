// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
fetchMock.dontMock();
