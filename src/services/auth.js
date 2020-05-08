export default function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'o1li240sçkdoymab48kanf04ps2n4nalfçksp5dcsbo91lalopanwudnsidf',
        user: {
          name: 'João Victor Vieira',
          email: 'joaovictorvieira.23@hotmail.com',
        },
      });
    }, 2000);
  });
}