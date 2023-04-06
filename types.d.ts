// declare module '@heroicons/react' {
//     export const AcademicCapIcon: (props: React.ComponentProps<'svg'>) => JSX.Element;
//     export const ChevronDownIcon: (props: React.ComponentProps<'svg'>) => JSX.Element;
//     export const ArrowRightCircleIcon: (props: React.ComponentProps<'svg'>) => JSX.Element;
// }

export default interface item {
  id: number;
  title: string;
  icon: React.ReactElement<SVGProps<SVGSVGElement>>;
}
