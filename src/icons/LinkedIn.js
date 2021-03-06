import React from 'react'

const LinkedIn = ({ color }) => {
  const stroke = color ? color : '#4C51BF'
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Home-(Light-Theme)"
          transform="translate(-1046.000000, -685.000000)"
          stroke={stroke}
        >
          <g
            id="streamline-icon-professional-network-linkedin@24x24"
            transform="translate(1046.000000, 685.000000)"
          >
            <polygon
              id="Path"
              points="6.5 25.3809524 0.590909091 25.3809524 0.590909091 9.28571429 6.5 9.28571429"
            ></polygon>
            <path
              d="M17.1363636,14.2380952 C15.8304545,14.2380952 14.7727273,15.3461905 14.7727273,16.7142857 L14.7727273,25.3809524 L8.86363636,25.3809524 L8.86363636,9.28571429 L14.7727273,9.28571429 L14.7727273,11.1242857 C16.0916364,9.95304762 17.7591818,9.29809524 19.4881818,9.27333333 C22.9887273,9.27333333 25.4090909,11.9971429 25.4090909,17.1414286 L25.4090909,25.3809524 L19.5,25.3809524 L19.5,16.7142857 C19.5,15.3461905 18.4422727,14.2380952 17.1363636,14.2380952 Z"
              id="Path"
            ></path>
            <path
              d="M6.5,3.71428571 C6.5,5.42409524 5.17754545,6.80952381 3.54545455,6.80952381 C1.91336364,6.80952381 0.590909091,5.42409524 0.590909091,3.71428571 C0.590909091,2.00447619 1.91336364,0.619047619 3.54545455,0.619047619 C5.17754545,0.619047619 6.5,2.00447619 6.5,3.71428571 Z"
              id="Path"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default LinkedIn
