import React from 'react';

function Table(){
  
  return (
    <div>
      <h3 class="heading-3">//PROJECT</h3>
      <p class="text-pink">Thanh's Portfolio<span> ( October 2018 - December 2018 )</span></p>
      <table>
        <tr>
          <th class="table-heading text-blue">
            Customer
          </th>
          <td>None</td>
        </tr>
        <tr>
          <th class="table-heading text-blue">
            Description
          </th>
          <td>
            <p>
              This is a webpage that introduce myself about who I am and what things I've done.</p>
            <p>Link: https://saoziha.github.io/</p>
            <p>Github: https://github.com/saoziha/Thanh-s-Portfolio.git</p>
          </td>
        </tr>
        <tr>
          <th class="table-heading text-blue">
            Team size
          </th>
          <td>1</td>
        </tr>
        <tr>
          <th class="table-heading text-blue">
            My position
          </th>
          <td>Developer</td>
        </tr>
        <tr>
          <th class="table-heading text-blue">
            My responsibilities
          </th>
          <td>
            <p>- Design</p>
            <p>- Development</p>
            <p>- Review code</p>
            <p>- Optimize code</p>
            <p>- Fixing bugs</p>
          </td>
        </tr>
        <tr>
          <th class="table-heading text-blue">
            Technologies used
          </th>
          <td>
            <p>- Visual studio code, Source tree.</p>
            <p>- Html, Css, Boostrap 4, SASS.</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Table;