"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Target,
  Trophy,
  Eye,
  Handshake,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Quote,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

export default function VieForGoodWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Vie For Good</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("causes")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Causes
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Team
            </button>
            <Button
              onClick={() => scrollToSection("get-started")}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
            >
              Join the Movement
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("causes")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                Causes
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                Team
              </button>
              <Button
                onClick={() => scrollToSection("get-started")}
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 w-full"
              >
                Join the Movement
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? "animate-in slide-in-from-left duration-1000" : "opacity-0"}`}>
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2">
                  🌟 Making Good Contagious
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Turn Your Passion Into{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Purpose
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Give Back, Have Fun, and Make a Real Difference!
                </p>
                <p className="text-lg text-gray-500">
                  Vie For Good empowers you to support causes you care about through exciting, interactive giving
                  experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-lg px-8 py-6"
                  onClick={() => scrollToSection("get-started")}
                >
                  Join the Movement
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2"
                  onClick={() => scrollToSection("how-it-works")}
                >
                  <Play className="mr-2 w-5 h-5" />
                  See How It Works
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>10K+ Changemakers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>$2M+ Raised</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4" />
                  <span>500+ Projects</span>
                </div>
              </div>
            </div>

            <div className={`${isVisible ? "animate-in slide-in-from-right duration-1000" : "opacity-0"}`}>
              <div className="relative">
                <img src="/community-giving-event.png" alt="Community giving event" className="rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Impact Achieved!</p>
                      <p className="text-sm text-gray-500">Clean water for 500 families</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <ChevronDown className="w-8 h-8 text-gray-400 mx-auto animate-bounce" />
        </div>
      </section>

      {/* The Problem & Opportunity */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Giving Should Feel Good—But Too Often, It Doesn't
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 border-2 border-red-100 bg-red-50">
                <CardContent className="p-0 text-center space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <X className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Feeling Disconnected</h3>
                  <p className="text-gray-600">You donate, but never see the real impact of your generosity.</p>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-red-100 bg-red-50">
                <CardContent className="p-0 text-center space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <X className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Donation Fatigue</h3>
                  <p className="text-gray-600">Endless asks without joy, community, or meaningful engagement.</p>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-red-100 bg-red-50">
                <CardContent className="p-0 text-center space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <X className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Lack of Trust</h3>
                  <p className="text-gray-600">
                    Uncertainty about where your money goes and if it's making a difference.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white mt-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                What if giving could be joyful, social, and transparent?
              </h3>
              <p className="text-xl opacity-90">
                Where every act of kindness is celebrated and you're part of something bigger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introducing Vie For Good */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 text-lg">
              The Solution
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Meet Vie For Good: The Future of Social Impact
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We reimagine giving as an engaging, community-driven experience where generosity meets joy, transparency
              meets trust, and individual actions create collective impact.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Gamified Giving</h3>
                    <p className="text-gray-600">
                      Turn generosity into an adventure with challenges, rewards, and celebrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Impact</h3>
                    <p className="text-gray-600">
                      See exactly where your money goes and the real lives you're touching.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Vibrant Community</h3>
                    <p className="text-gray-600">
                      Connect with like-minded changemakers and amplify your impact together.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="/placeholder-7z75d.png"
                  alt="Vie For Good app interface"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                We believe everyone can be a changemaker—no matter how big or small your contribution.
              </h3>
              <p className="text-lg text-gray-600">
                Your $5 matters just as much as someone else's $500. It's about the collective power of good people
                doing good things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">How Vie For Good Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to transform your giving experience and maximize your impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Choose a Cause</h3>
                <p className="text-gray-600">
                  Select from vetted, high-impact projects and charities that align with your values.
                </p>
                <img src="/placeholder-ntgq1.png" alt="Choose a cause" className="rounded-lg mx-auto" />
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Join or Create</h3>
                <p className="text-gray-600">
                  Participate in fun challenges, group fundraisers, or start your own campaign.
                </p>
                <img src="/friends-fundraising.png" alt="Join or create campaign" className="rounded-lg mx-auto" />
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Give & Track</h3>
                <p className="text-gray-600">
                  Donate, share, and see real-time progress with transparent impact reporting.
                </p>
                <img src="/donation-dashboard.png" alt="Give and track impact" className="rounded-lg mx-auto" />
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Celebrate & Share</h3>
                <p className="text-gray-600">
                  Earn badges, unlock rewards, and inspire others by sharing your journey.
                </p>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Celebrate and share"
                  className="rounded-lg mx-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Vie For Good */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Why Join Vie For Good?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another donation platform. We're a movement that makes giving meaningful, fun, and
              impactful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Gamified Giving</h3>
                <p className="text-gray-600 leading-relaxed">
                  Make generosity fun with challenges, leaderboards, badges, and rewards that celebrate every
                  contribution.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-green-200">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Real Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  100% transparency—see exactly where your money goes, track progress in real-time, and witness the
                  lives you touch.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with like-minded changemakers, friends, and family. Amplify your impact through collective
                  action.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-yellow-200">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Empowerment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Support causes you care about, your way. Whether it's $5 or $500, every contribution matters and is
                  celebrated.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-indigo-200">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Trust</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every project is vetted for integrity and effectiveness. Your trust is our foundation, transparency is
                  our promise.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-pink-200">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Flexibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  Give monthly, join challenges, start campaigns, or make one-time donations. Support causes on your
                  terms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Causes & Success Stories */}
      <section id="causes" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">See the Good You Can Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real impact, real stories from our community of changemakers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=250&width=400"
                  alt="Clean water project"
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-500 text-white">Water & Sanitation</Badge>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Clean Water for Kenya</h3>
                <p className="text-gray-600">
                  Together, we provided clean water access to 500 families in rural Kenya, transforming entire
                  communities.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-semibold text-green-600">100% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-900">$25,000</span> raised by{" "}
                    <span className="font-semibold text-gray-900">312</span> donors
                  </div>
                  <Button variant="outline" size="sm">
                    Watch Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=250&width=400"
                  alt="Education project"
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-500 text-white">Education</Badge>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Books for Bangladesh</h3>
                <p className="text-gray-600">
                  Our community funded a complete library renovation, bringing 2,000 new books to eager young minds.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-semibold text-green-600">100% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-900">$18,500</span> raised by{" "}
                    <span className="font-semibold text-gray-900">245</span> donors
                  </div>
                  <Button variant="outline" size="sm">
                    Read Impact
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=250&width=400"
                  alt="Healthcare project"
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-purple-500 text-white">Healthcare</Badge>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Mobile Clinic Guatemala</h3>
                <p className="text-gray-600">
                  A mobile medical unit now serves 15 remote villages, providing healthcare to over 3,000 people
                  annually.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-semibold text-blue-600">85% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-900">$34,000</span> raised by{" "}
                    <span className="font-semibold text-gray-900">428</span> donors
                  </div>
                  <Button variant="outline" size="sm">
                    Join Campaign
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">What Our Community Says</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardContent className="p-0 space-y-4">
                  <Quote className="w-8 h-8 text-blue-500" />
                  <p className="text-gray-600 italic">
                    "Vie For Good made giving fun again! I love seeing exactly how my donations help and connecting with
                    other donors."
                  </p>
                  <div className="flex items-center space-x-3">
                    <img src="/placeholder.svg?height=40&width=40" alt="Sarah M." className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-900">Sarah M.</p>
                      <p className="text-sm text-gray-500">Monthly Donor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0 space-y-4">
                  <Quote className="w-8 h-8 text-green-500" />
                  <p className="text-gray-600 italic">
                    "The transparency is incredible. I can see photos and updates from the water well my family helped
                    fund in Kenya."
                  </p>
                  <div className="flex items-center space-x-3">
                    <img src="/placeholder.svg?height=40&width=40" alt="David L." className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-900">David L.</p>
                      <p className="text-sm text-gray-500">Campaign Leader</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0 space-y-4">
                  <Quote className="w-8 h-8 text-purple-500" />
                  <p className="text-gray-600 italic">
                    "My kids love earning badges for their donations. It's teaching them that giving back can be joyful
                    and rewarding."
                  </p>
                  <div className="flex items-center space-x-3">
                    <img src="/placeholder.svg?height=40&width=40" alt="Maria R." className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-900">Maria R.</p>
                      <p className="text-sm text-gray-500">Family Donor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Vie For Good */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 text-lg">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Mission: Making Good Contagious</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Vie For Good was born from a simple belief: giving should be joyful, transparent, and
                  community-driven. We saw too many people wanting to make a difference but feeling disconnected from
                  traditional charity models.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our founders experienced this firsthand—donating to causes but never seeing the impact, feeling
                  isolated in their generosity, and wondering if their contributions truly mattered.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    We exist to ignite generosity and empower everyone to be a force for good through engaging,
                    transparent, and community-driven giving experiences.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    A world where giving is joyful, social, and accessible to all—where every person feels empowered to
                    create positive change, no matter the size of their contribution.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Our mission in action"
                  className="rounded-xl shadow-lg"
                />

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">10K+</div>
                    <div className="text-sm text-gray-600">Active Changemakers</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">$2M+</div>
                    <div className="text-sm text-gray-600">Funds Raised</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">500+</div>
                    <div className="text-sm text-gray-600">Projects Funded</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">50+</div>
                    <div className="text-sm text-gray-600">Countries Reached</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Meet the Changemakers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team is dedicated to revolutionizing how the world gives back.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Sarah Chen"
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Sarah Chen</h3>
                  <p className="text-blue-600 font-medium">CEO & Co-Founder</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "I believe technology can make generosity more accessible and impactful. Every person has the power to
                  change the world."
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Former McKinsey
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Stanford MBA
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Marcus Johnson"
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Marcus Johnson</h3>
                  <p className="text-green-600 font-medium">CTO & Co-Founder</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "Building transparent, user-friendly platforms that connect hearts with causes is my passion and
                  purpose."
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Ex-Google
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MIT Graduate
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Priya Patel"
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Priya Patel</h3>
                  <p className="text-purple-600 font-medium">Head of Impact</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "Measuring and maximizing social impact is both an art and a science. I ensure every dollar creates
                  meaningful change."
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Ex-Oxfam
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Harvard MPP
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Alex Rivera"
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Alex Rivera</h3>
                  <p className="text-yellow-600 font-medium">Community Lead</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "Community is everything. I help our changemakers connect, collaborate, and amplify their collective
                  impact."
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Ex-Airbnb
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    UC Berkeley
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Emma Thompson"
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Emma Thompson</h3>
                  <p className="text-pink-600 font-medium">Head of Design</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "Great design makes complex things simple and joyful. I craft experiences that inspire action and
                  connection."
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Ex-IDEO
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    RISD Graduate
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="James Kim"
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">James Kim</h3>
                  <p className="text-indigo-600 font-medium">Partnerships Director</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "Building bridges between donors and causes, ensuring every partnership creates maximum positive
                  impact for all."
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Ex-United Way
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Wharton MBA
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How You Can Get Involved */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of changemakers who are transforming the world through joyful, impactful giving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Join a Campaign</h3>
                <p className="text-white/80 text-sm">
                  Find a cause that inspires you and join an existing campaign with like-minded changemakers.
                </p>
                <Button variant="secondary" className="w-full">
                  Browse Campaigns
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Start Your Own</h3>
                <p className="text-white/80 text-sm">
                  Launch a challenge or campaign for your favorite cause and rally your community around it.
                </p>
                <Button variant="secondary" className="w-full">
                  Create Campaign
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Partner With Us</h3>
                <p className="text-white/80 text-sm">
                  For businesses, schools, or organizations looking to engage in meaningful social impact.
                </p>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Spread the Word</h3>
                <p className="text-white/80 text-sm">
                  Share on social media and invite friends to join the movement of joyful giving.
                </p>
                <Button variant="secondary" className="w-full">
                  Share Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Got Questions? We've Got Answers.</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about joining the Vie For Good community.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How does Vie For Good choose its causes?</h3>
                  <p className="text-gray-600">
                    We have a rigorous vetting process that evaluates organizations based on impact, transparency,
                    financial accountability, and alignment with our values. Every cause partner undergoes thorough due
                    diligence and ongoing monitoring to ensure your donations create maximum positive impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Is my donation tax-deductible?</h3>
                  <p className="text-gray-600">
                    Yes! All donations made through Vie For Good to registered 501(c)(3) organizations are
                    tax-deductible. You'll receive a tax receipt immediately after your donation, and we provide annual
                    summaries for easy tax filing.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How do I know my money is making a difference?
                  </h3>
                  <p className="text-gray-600">
                    Transparency is our cornerstone. You'll receive regular updates with photos, videos, and detailed
                    reports showing exactly how your donation was used. Our impact tracking system provides real-time
                    progress updates and connects you directly with the communities you're helping.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I start my own campaign?</h3>
                  <p className="text-gray-600">
                    Creating your own campaign is easy and free. Choose from our vetted causes, set your goal, customize
                    your campaign page, and start rallying your network. We provide tools, resources, and support to
                    help you succeed.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How does gamification work?</h3>
                  <p className="text-gray-600">
                    Our gamification system celebrates every contribution with badges, points, and recognition. Complete
                    challenges, reach milestones, and unlock rewards while making a real difference. It's designed to
                    make giving fun and social, not to trivialize the serious work of creating change.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What percentage of my donation goes to the cause?
                  </h3>
                  <p className="text-gray-600">
                    We're committed to transparency about fees. A small processing fee (typically 2-3%) covers payment
                    processing and platform maintenance. The vast majority of your donation goes directly to your chosen
                    cause, and we clearly display the breakdown before you donate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Trusted by Changemakers Worldwide</h2>
            <p className="text-xl text-gray-600">Join thousands who have discovered the joy of impactful giving.</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Active Changemakers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
              <div className="text-gray-600">Funds Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Funded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "This platform has completely changed how I think about giving. The transparency and community aspect
                  make every donation feel meaningful and impactful."
                </p>
                <div className="flex items-center space-x-3">
                  <img src="/placeholder.svg?height=40&width=40" alt="Jennifer K." className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900">Jennifer K.</p>
                    <p className="text-sm text-gray-500">Monthly Donor, 2 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "I've raised over $5,000 for clean water projects through my campaigns. The tools and support make it
                  so easy to rally friends and family around causes I care about."
                </p>
                <div className="flex items-center space-x-3">
                  <img src="/placeholder.svg?height=40&width=40" alt="Michael R." className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900">Michael R.</p>
                    <p className="text-sm text-gray-500">Campaign Leader</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Our company partnership with Vie For Good has engaged our employees like never before. The
                  gamification and transparency have made corporate giving fun and meaningful."
                </p>
                <div className="flex items-center space-x-3">
                  <img src="/placeholder.svg?height=40&width=40" alt="Lisa T." className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900">Lisa T.</p>
                    <p className="text-sm text-gray-500">Corporate Partner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Media Mentions */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-8">As featured in:</p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <img src="/placeholder.svg?height=40&width=120" alt="TechCrunch" className="h-8" />
              <img src="/placeholder.svg?height=40&width=120" alt="Forbes" className="h-8" />
              <img src="/placeholder.svg?height=40&width=120" alt="Fast Company" className="h-8" />
              <img src="/placeholder.svg?height=40&width=120" alt="Wired" className="h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="get-started" className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Join the Vie For Good Movement Today!</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Ready to give back in a way that's fun, meaningful, and truly impactful? Sign up now and start your
              journey as a changemaker.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Free to join</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Instant impact tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Vibrant community</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                  >
                    Watch Demo
                    <Play className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                <p className="text-sm opacity-80">Join 10,000+ changemakers who are already making a difference</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
              <div className="space-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">Start Giving</h3>
                <p className="text-white/80 text-sm">Choose causes you care about</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">Build Community</h3>
                <p className="text-white/80 text-sm">Connect with fellow changemakers</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">See Impact</h3>
                <p className="text-white/80 text-sm">Track your real-world difference</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Vie For Good</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Making good contagious through joyful, transparent, and community-driven giving experiences.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Users className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Target className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("causes")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Browse Causes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Team
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Start a Campaign
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Join a Cause
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Volunteer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Vie For Good. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">Made with ❤️ for changemakers worldwide</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 shadow-lg rounded-full px-6 py-3"
          onClick={() => scrollToSection("get-started")}
        >
          <Heart className="w-5 h-5 mr-2" />
          Join Now
        </Button>
      </div>
    </div>
  )
}
