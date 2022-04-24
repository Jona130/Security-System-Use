pub fn main() {
    let mut a: [char; 2] = ['1', '2'];
    let b: [char;3 ] = ['1', '2', '3'];
    a.copy_from_slice(&b);
}