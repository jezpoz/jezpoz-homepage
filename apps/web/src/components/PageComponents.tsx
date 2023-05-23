import PortableText from "@/components/PortableText";
import HeroComponent from "@/components/HeroComponent";

interface PageComponentProps {
  components: any[];
}

export default function PageComponents({ components }: PageComponentProps) {
  function renderComponent(component: any) {
    switch (component._type) {
      case "hero-component": {
        return (
          <section key={component._key}>
            <HeroComponent component={component} />
          </section>
        );
      }
      case "text-component": {
        return (
          <section key={component._key}>
            <PortableText value={component.content} />
          </section>
        );
      }
      default: {
        return null;
      }
    }
  }

  return <>{components?.map(renderComponent)}</>;
}
