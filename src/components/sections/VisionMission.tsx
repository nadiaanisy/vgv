import {
  Card,
  CardContent 
} from '../ui/card';

export function VisionMission() {
  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <CardContent className="p-0 space-y-4">
              <h2 className="text-2xl font-medium text-foreground">Vision</h2>
              <p className="text-muted-foreground">
                To revolutionize water sports by creating adaptive gear that seamlessly integrates with the natural environment, enabling athletes to perform at their peak while staying comfortable and protected in any aquatic condition.
              </p>
            </CardContent>
          </Card>
          <Card className="p-8">
            <CardContent className="p-0 space-y-4">
              <h2 className="text-2xl font-medium text-foreground">Mission</h2>
              <p className="text-muted-foreground">
                We develop innovative wetsuit technology using advanced materials and smart sensors to automatically adjust thermal regulation, providing optimal comfort and performance for water sports enthusiasts across all skill levels and environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}