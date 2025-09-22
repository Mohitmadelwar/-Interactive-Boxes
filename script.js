document.querySelectorAll('.option').forEach(function(option) {
  option.addEventListener('mouseenter', function() {
    document.querySelectorAll('.option').forEach(function(o) {
      o.classList.remove('expanded');
    });
    option.classList.add('expanded');
  });
  option.addEventListener('mouseleave', function() {
    option.classList.remove('expanded');
  });
});

const options = [
  {
    id: 'option1',
    radio: 'radio1',
    total: '$10.00 USD',
    delivery: false
  },
  {
    id: 'option2',
    radio: 'radio2',
    total: '$18.00 USD',
    delivery: true
  },
  {
    id: 'option3',
    radio: 'radio3',
    total: '$24.00 USD',
    delivery: true
  }
];
options.forEach(function(opt) {
  document.getElementById(opt.radio).addEventListener('change', function() {
    options.forEach(function(o) {
      document.getElementById(o.id).classList.remove('selected');
    });
    document.getElementById(opt.id).classList.add('selected');
    document.getElementById('total').textContent = opt.total;
  });
}); 