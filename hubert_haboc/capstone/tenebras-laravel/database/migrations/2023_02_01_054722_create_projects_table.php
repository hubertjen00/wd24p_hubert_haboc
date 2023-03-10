<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('project_name');
            $table->string('project_owner');
            $table->string('project_type');
            $table->string('project_location');
            $table->string('project_status');
            $table->string('payment_status');
            $table->string('turnover_date');
            $table->timestamps();
        });
    }

    // id: id,
    //         name: name,
    //         owner: owner,
    //         type: type,
    //         location: location,
    //         status: projStatus,
    //         payment: paymentStatus,
    //         turnover: turnoverDate,

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
};
