using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ARGENTRADER.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Operation_User_UserId",
                table: "Operation");

            migrationBuilder.RenameColumn(
                name: "commission",
                table: "Operation",
                newName: "Commission");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Operation",
                newName: "User_Id");

            migrationBuilder.RenameIndex(
                name: "IX_Operation_UserId",
                table: "Operation",
                newName: "IX_Operation_User_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Operation_User_User_Id",
                table: "Operation",
                column: "User_Id",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Operation_User_User_Id",
                table: "Operation");

            migrationBuilder.RenameColumn(
                name: "Commission",
                table: "Operation",
                newName: "commission");

            migrationBuilder.RenameColumn(
                name: "User_Id",
                table: "Operation",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Operation_User_Id",
                table: "Operation",
                newName: "IX_Operation_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Operation_User_UserId",
                table: "Operation",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
