
import React from 'react';
import { 
  CalendarClock, Clock, ChevronRight, FileText, 
  UserCheck, AlertCircle, Award 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome, {user?.name || 'Faculty'}!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Here's your HRMS dashboard - {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Leave Balance */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <CalendarClock size={18} className="mr-2 text-vit-blue dark:text-blue-400" />
              Leave Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm text-muted-foreground">Casual Leave</p>
              </div>
              <div>
                <p className="text-2xl font-bold">30</p>
                <p className="text-sm text-muted-foreground">Earned Leave</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="/leave">Apply for Leave</a>
            </Button>
          </CardFooter>
        </Card>

        {/* Attendance */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock size={18} className="mr-2 text-vit-blue dark:text-blue-400" />
              Today's Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Check-in</span>
                <span className="font-medium">09:05 AM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Required Hours</span>
                <span className="font-medium">8 hours</span>
              </div>
              <div className="pt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>63%</span>
                </div>
                <Progress value={63} className="h-2" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" size="sm" className="w-full">Check Out</Button>
          </CardFooter>
        </Card>

        {/* Payslip */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <FileText size={18} className="mr-2 text-vit-blue dark:text-blue-400" />
              Latest Payslip
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Month</span>
                <span className="font-medium">March 2025</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Issued On</span>
                <span className="font-medium">April 1, 2025</span>
              </div>
              <div className="flex justify-between text-sm font-medium pt-2 text-vit-blue dark:text-blue-400">
                <span>Net Salary</span>
                <span>₹75,000</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" size="sm" className="w-full">Download PDF</Button>
          </CardFooter>
        </Card>

        {/* Tasks & Approvals */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <UserCheck size={18} className="mr-2 text-vit-blue dark:text-blue-400" />
              Pending Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm">Leave Requests</span>
                </div>
                <span className="text-sm font-medium">2</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-sm">Travel Claims</span>
                </div>
                <span className="text-sm font-medium">1</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" size="sm" className="w-full">View All</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recent Activity & Announcements Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                  <FileText size={16} className="text-vit-blue dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium">Leave Application Submitted</h4>
                    <span className="text-xs text-muted-foreground">2 days ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    You've submitted a casual leave request for April 15-16, 2025.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-green-100 dark:bg-green-900 p-2 rounded-full">
                  <Award size={16} className="text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium">Performance Review Completed</h4>
                    <span className="text-xs text-muted-foreground">1 week ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your annual performance review has been completed with excellent ratings.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                  <Clock size={16} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium">Attendance Regularization</h4>
                    <span className="text-xs text-muted-foreground">2 weeks ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your attendance regularization request for March 28th has been approved.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>

        {/* Announcements */}
        <Card>
          <CardHeader>
            <CardTitle>Announcements</CardTitle>
            <CardDescription>Important updates from HR</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4 py-1">
                <div className="flex items-center mb-1">
                  <AlertCircle size={14} className="text-red-500 mr-1" />
                  <h4 className="text-sm font-medium">Holiday Notification</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  The university will remain closed on May 1st for Labor Day.
                </p>
                <p className="text-xs text-muted-foreground mt-1">Apr 25, 2025</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <div className="flex items-center mb-1">
                  <AlertCircle size={14} className="text-blue-500 mr-1" />
                  <h4 className="text-sm font-medium">Faculty Meeting</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  All faculty members are requested to attend the general meeting on May 5th at 10 AM.
                </p>
                <p className="text-xs text-muted-foreground mt-1">Apr 22, 2025</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-1">
                <div className="flex items-center mb-1">
                  <AlertCircle size={14} className="text-green-500 mr-1" />
                  <h4 className="text-sm font-medium">Annual Sports Day</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Register for the Annual Sports Day events scheduled for May 10th.
                </p>
                <p className="text-xs text-muted-foreground mt-1">Apr 15, 2025</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              View All Announcements
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 hover:bg-vit-light dark:hover:bg-gray-700">
              <CalendarClock className="h-6 w-6 mb-2" />
              <span className="text-sm">Apply Leave</span>
            </Button>
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 hover:bg-vit-light dark:hover:bg-gray-700">
              <FileText className="h-6 w-6 mb-2" />
              <span className="text-sm">Payslips</span>
            </Button>
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 hover:bg-vit-light dark:hover:bg-gray-700">
              <Clock className="h-6 w-6 mb-2" />
              <span className="text-sm">Attendance</span>
            </Button>
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 hover:bg-vit-light dark:hover:bg-gray-700">
              <UserCheck className="h-6 w-6 mb-2" />
              <span className="text-sm">Approvals</span>
            </Button>
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 hover:bg-vit-light dark:hover:bg-gray-700">
              <Award className="h-6 w-6 mb-2" />
              <span className="text-sm">Benefits</span>
            </Button>
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 hover:bg-vit-light dark:hover:bg-gray-700">
              <AlertCircle className="h-6 w-6 mb-2" />
              <span className="text-sm">Help Desk</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
