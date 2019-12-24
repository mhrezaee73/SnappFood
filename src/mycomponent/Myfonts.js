const Myfonts = (
  type: 'Thin' | 'Medium' | 'Light' | 'FD' | 'Bold' | 'Black'
) => {
  switch (type) {
    case 'Thin':
      return 'Vazir-Thin-FD';

    case 'Medium':
      return 'Vazir-Medium-FD';

    case 'Light':
      return 'Vazir-Light-FD';

    case 'FD':
      return 'Vazir-FD';

    case 'Bold':
      return 'Vazir-Bold-FD';

    case 'Black':
      return 'Vazir-Black-FD';

    default:
      return 'Vazir-Black-FD';
  }
};

export { Myfonts };
