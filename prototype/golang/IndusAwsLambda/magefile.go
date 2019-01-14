// +build mage

package main

import (
	"os"

	"github.com/magefile/mage/mg"
	"github.com/magefile/mage/sh"
)

// Execute Build Pipeline Test->Generate Source -> Zip For AWS Lambda -> Show coverage
func Build() {
	mg.SerialDeps(MakeTest, GoGenerate, AwsZipFile)
}

// Cmean and Execute Build Pipeline Test->Generate Source -> Zip For AWS Lambda -> Show coverage
func CleanAndBuild() {
	mg.SerialDeps(Clean, Build)
}

// Clean
func Clean() error {
	sh.Rm("./main.zip")
	sh.Rm("./main")
	sh.Rm("./coverage.out")
	return nil
}

// Show Coverage Result
func Coverage() error {
	return sh.RunV("go", "tool", "cover", "-html", "coverage.out")
}

func MakeTest() error {

	return sh.RunV("go", "test", "-coverprofile", "coverage.out")
}

func GoGenerate() error {
	os.Setenv("GOOS", "linux")
	return sh.RunV("go", "build", "-o", "main", "main.go")

}

func AwsZipFile() error {
	return sh.RunV("build-lambda-zip.exe", "-o", "main.zip", "main")
}
