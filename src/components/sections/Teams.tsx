import { Card, CardContent } from './ui/card'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Badge } from './ui/badge'
import { Users, Target, TrendingUp, Lightbulb, BarChart3 } from 'lucide-react'

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    avatar: "https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwQ0VPfGVufDF8fHx8MTc1NzM5MTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    initials: "SC",
    assignmentInsight: "Natural leadership qualities and strategic thinking from Assignment 1 analysis",
    keyStrengths: ["Strategic Vision", "Team Leadership", "Business Development"]
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Marketing",
    avatar: "https://images.unsplash.com/photo-1587614203976-365c74645e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NTc0OTEwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    initials: "MR",
    assignmentInsight: "Strong communication skills and creative mindset identified in Assignment 1",
    keyStrengths: ["Social Media Strategy", "Brand Communications", "Customer Engagement"]
  },
  {
    name: "Emily Johnson",
    role: "Sales Manager",
    avatar: "https://images.unsplash.com/photo-1587614203976-365c74645e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NTc0OTEwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    initials: "EJ",
    assignmentInsight: "Excellent interpersonal skills and persuasive abilities from Assignment 1 evaluation",
    keyStrengths: ["Customer Relations", "Sales Strategy", "Market Analysis"]
  },
  {
    name: "David Kim",
    role: "Operations Coordinator", 
    avatar: "https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwQ0VPfGVufDF8fHx8MTc1NzM5MTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    initials: "DK",
    assignmentInsight: "Detail-oriented and organizational strengths highlighted in Assignment 1",
    keyStrengths: ["Process Management", "Quality Control", "Logistics Coordination"]
  },
  {
    name: "Lisa Wang",
    role: "Financial Analyst",
    avatar: "https://images.unsplash.com/photo-1587614203976-365c74645e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NTc0OTEwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    initials: "LW",
    assignmentInsight: "Analytical thinking and numerical competency identified in Assignment 1",
    keyStrengths: ["Financial Planning", "Data Analysis", "Performance Tracking"]
  }
]

export function TeamSection() {
  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-6 h-6 text-primary" />
            <Badge variant="secondary">Meet the Team</Badge>
          </div>
          <h2 className="text-3xl font-medium text-foreground mb-4">Our Entrepreneurial Team</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Based on our Assignment 1 entrepreneurial skills assessment, we strategically assigned roles that leverage 
            each team member's natural strengths and competencies to build a successful Wetty product venture.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <Avatar className="w-20 h-20 mx-auto">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {member.assignmentInsight}
                  </p>
                </div>
                <div className="space-y-2">
                  {member.keyStrengths.map((strength, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs mx-1">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Assignment 1 Insights Section */}
        <div className="bg-white rounded-xl p-8">
          <h3 className="text-xl font-medium text-foreground mb-6 text-center">
            How Assignment 1 Insights Shaped Our Team Structure
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-foreground">Skills Assessment</h4>
              <p className="text-sm text-muted-foreground">
                We analyzed each member's entrepreneurial competencies to identify natural leadership and specialty areas.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-medium text-foreground">Strategic Placement</h4>
              <p className="text-sm text-muted-foreground">
                Roles were assigned based on individual strengths to maximize team effectiveness and business success.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-foreground">Complementary Skills</h4>
              <p className="text-sm text-muted-foreground">
                We ensured our team covers all essential business functions from leadership to operations and finance.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-medium text-foreground">Performance Focus</h4>
              <p className="text-sm text-muted-foreground">
                Each role is designed to leverage personal strengths while contributing to our overall venture success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}