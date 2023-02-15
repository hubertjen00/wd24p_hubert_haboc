<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    function store(Request $request) 
    {
        $project = new Project();

        $project->project_name = $request->project_name;
        $project->project_owner = $request->project_owner;
        $project->project_type = $request->project_type;
        $project->project_location = $request->project_location;
        $project->project_status = $request->project_status;
        $project->payment_status = $request->payment_status;
        $project->turnover_date = $request->turnover_date;
        

        $project->save();

        return $project;
    }

    function index() 
    {
        return Project::all();
    }

    function update(Request $request, $id) 
    {
        $project = Project::find($id);

        $project->project_name = $request->project_name;
        $project->project_location = $request->project_location;
        $project->project_type = $request->project_type;
        $project->project_status = $request->project_status;
        $project->payment_status = $request->payment_status;
        $project->turnover_date = $request->turnover_date;
        $project->remarks = $request->remarks;

        $project->save();

        return $project;
    }

    function destroy($id) 
    {
        $project = Project::find($id);
        $project-> delete();

        return "Deleted Project";
    }

    function show($id) 
    {
        // return Project::find($id);

        $project = Project::find($id);

        if ($project == "") {
            return "Project Not Found";
        }
        else return $project;
    }
}
 
