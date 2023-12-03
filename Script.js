      function deleteRow(row) {
          row.parentNode.parentNode.remove();
      }

      function editRow(row) {
          var currentRow = row.parentNode.parentNode;
          var cells = currentRow.getElementsByTagName("td");

          var name = cells[0].innerText;
          var email = cells[1].innerText;
          var role = cells[2].innerText;

          var newName = prompt("Edit Name:", name);
          var newEmail = prompt("Edit Email:", email);
          var newrole = prompt("Edit role:",role);

          // Update the row with edited data
          if (newName !== null && newEmail !== null) {
              cells[0].innerText = newName;
              cells[1].innerText = newEmail;
              cells[2].innerText = newrole;
          }
      }

      function searchTable() {
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("searchInput");
          filter = input.value.toUpperCase();
          table = document.querySelector("table");
          tr = table.getElementsByTagName("tr");

          for (i = 0; i < tr.length; i++) {
              tr[i].classList.remove("highlight");
              td = tr[i].getElementsByTagName("td")[0];
              // Assuming the search is based on the first column (Name)
              if (td) {
                  txtValue = td.textContent || td.innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                      tr[i].classList.add("highlight");
                  }
              }
          }

          // Call clearHighlights when the input is empty
          if (filter === "") {
            clearHighlights();
          }
      }

      function submitForm() {
          var name = prompt("Enter Name:");
          var email = prompt("Enter Email:");
          var jobrole = prompt("Enter Role:");

          // Check if all fields are filled
          if (name && email && jobrole) {
              // Create a new row
              var newRow = document.createElement("tr");
              newRow.innerHTML = `
                  <th class="checkbox"><input type="checkbox" id="selectAll" onchange="highlightAllRows()"></th>
                  <td>${name}</td>
                  <td>${email}</td>
                  <td>${jobrole}</td>
                  <td class="actions">
                    <img src="delete.png" width="20px" height="20px" alt="" onclick="deleteRow(this)">
                    <img src="Edit-icon.png" width="20px" height="20px" alt="" onclick="editRow(this)">  
                  </td>
              `;

              // Append the new row to the table
              document.getElementById("userTable").getElementsByTagName('tbody')[0].appendChild(newRow);
          } else {
              alert("Please fill in all fields before submitting.");
          }
      }

      function clearHighlights() {
        var table = document.querySelector("table");
        var tr = table.getElementsByTagName("tr");

        for (var i = 0; i < tr.length; i++) {
            tr[i].classList.remove("highlight");
        }
      }

     
      function goToPreviousRow() {
        var table = document.getElementById("userTable");
        var highlightedRow = table.querySelector("tbody tr.highlight");
    
        if (highlightedRow) {
          clearHighlights();
    
          var previousRow = highlightedRow.previousElementSibling;
          if (previousRow) {
            previousRow.classList.add("highlight");
          }
        }
      }
    
      function goToNextRow() {
        var table = document.getElementById("userTable");
        var highlightedRow = table.querySelector("tbody tr.highlight");
    
        if (highlightedRow) {
          clearHighlights();
    
          var nextRow = highlightedRow.nextElementSibling;
          if (nextRow) {
            nextRow.classList.add("highlight");
          }
        }
      }

      function goToFirstRow() {
        var table = document.getElementById("userTable");
        var firstRow = table.querySelector("tbody tr");
        clearHighlights();
        firstRow.classList.add("highlight");
      }

      function goToLastRow() {
        var table = document.getElementById("userTable");
        var lastRow = table.querySelector("tbody tr:last-child");
        clearHighlights();
        lastRow.classList.add("highlight");
      }
      function highlightRow(checkbox) {
        var row = checkbox.parentNode.parentNode;
        if (checkbox.checked) {
          row.classList.add("highlight");
        } else {
          row.classList.remove("highlight");
        }
      }
    
      function highlightAllRows() {
        var checkboxes = document.querySelectorAll("#userTable tbody input[type='checkbox']");
        checkboxes.forEach(function (checkbox) {
          var row = checkbox.parentNode.parentNode;
          if (checkbox.checked) {
            row.classList.add("highlight");
          } else {
            row.classList.remove("highlight");
          }
        });
      }
      function deleteSelectedRows() {
        var checkboxes = document.querySelectorAll("#userTable tbody input[type='checkbox']:checked");
        checkboxes.forEach(function (checkbox) {
          var row = checkbox.parentNode.parentNode;
          row.remove();
        });
      }