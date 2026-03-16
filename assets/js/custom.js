
      // Category Navigation Hover Functionality
      document.querySelectorAll('.category-nav-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
          const categoryId = this.dataset.category;
          const tabId = this.closest('.tab-pane').id;
          
          // Remove active state from all buttons in this tab
          this.closest('.mg-menu-button').querySelectorAll('.category-nav-btn').forEach(b => {
            b.style.backgroundColor = '';
          });
          
          // Add active state to current button
          this.style.backgroundColor = '#BEDBFF';
          
          // Hide all content sections
          this.closest('.row').querySelectorAll('.category-content').forEach(content => {
            content.classList.remove('active');
          });
          
          // Show the selected content
          const selectedContent = document.getElementById(categoryId);
          if (selectedContent) {
            selectedContent.classList.add('active');
          }
        });
      });